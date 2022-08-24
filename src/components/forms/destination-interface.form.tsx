import '@/components/forms/react-select-style.css';

import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { Label } from '@/components/Label';
import { TextArea } from '@/components/TextArea';
import { TextField } from '@/components/TextField';
import { Constants } from '@/constants';
import { DestinationInterface } from '@/generated/graphql';
import { useDestinationSystemSearch } from '@/hooks/useDestinationSystemSearch';
import { useTranslation } from '@/locale/i18n';
import { useDestinationInterface } from '@/pages/destination-interface/destination-interface.page';
import { RoutePath } from '@/router/paths';

interface IDestinationInterfaceForm extends DestinationInterface {
  destinationSystemOption: { label: string; value: number } | null;
}

const defaultValues = {
  id: 0,
  header: '',
  interfaceName: '',
  memo: '',
  method: '',
  optionData: '',
  payload: '',
  pkItems: '',
  resultKey: '',
  destinationSystemId: 0,
  sql: '',
  uri: '',
  destinationSystemOption: null,
};

export const DestinationInterfaceForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>('');

  const debounceSearchText = useCallback(
    debounce(setSearchText, Constants.debounceTime),
    [],
  );

  const { destinationInterface, onSubmit } = useDestinationInterface();

  const { isLoading, destinationSystemsOption } = useDestinationSystemSearch(searchText);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IDestinationInterfaceForm>({
    mode: 'onChange',
  });

  const onClickClear = () => {
    reset(defaultValues);
    navigate(RoutePath.destinationInterface);
  };

  useEffect(() => {
    if (!destinationInterface) {
      return;
    }

    const formData = {
      ...destinationInterface,
      destinationSystemOption:
        destinationSystemsOption?.find(
          (option) => option.value === destinationInterface.destinationSystemId,
        ) || null,
    };
    reset(formData);
  }, [destinationInterface]);

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-ful'>
          <TextField id='id' type='text' className='hidden' {...register('id')} />
          <TextField
            id='interfaceName'
            type='text'
            placeholder={t('DestinationInterface.label.interfaceName')}
            label={t('DestinationInterface.label.interfaceName')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.interfaceName?.message}
            {...register('interfaceName', {
              required: t('DestinationInterface.message.required'),
            })}
          />
          <Label labelClassName='label-text'>
            {t('DestinationInterface.label.destinationSystemId')}
          </Label>
          <Controller
            name='destinationSystemOption'
            control={control}
            rules={{ required: t('DestinationInterface.message.required') }}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                ref={ref}
                isClearable
                isSearchable
                defaultValue={null}
                isLoading={isLoading}
                onInputChange={debounceSearchText}
                onChange={(data) => onChange(data)}
                value={
                  destinationSystemsOption?.find(
                    (option) => option.value === value?.value,
                  ) || null
                }
                options={destinationSystemsOption}
              />
            )}
          />
          <TextField
            id='uri'
            type='text'
            placeholder={t('DestinationInterface.label.uri')}
            label={t('DestinationInterface.label.uri')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.uri?.message}
            {...register('uri', { required: t('DestinationInterface.message.required') })}
          />
          <TextField
            id='method'
            type='text'
            placeholder={t('DestinationInterface.label.method')}
            label={t('DestinationInterface.label.method')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.method?.message}
            {...register('method', {
              required: t('DestinationInterface.message.required'),
            })}
          />
          <TextField
            id='header'
            type='text'
            placeholder={t('DestinationInterface.label.header')}
            label={t('DestinationInterface.label.header')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.header?.message}
            {...register('header', {
              required: t('DestinationInterface.message.required'),
            })}
          />
          <TextArea
            id='payload'
            placeholder={t('DestinationInterface.label.payload')}
            label={t('DestinationInterface.label.payload')}
            labelClassName='label-text'
            className='h-32 input input-bordered w-full text-white'
            helper={errors.payload?.message}
            {...register('payload', {
              required: t('DestinationInterface.message.required'),
            })}
          />
          <TextField
            id='optionData'
            type='text'
            placeholder={t('DestinationInterface.label.optionData')}
            label={t('DestinationInterface.label.optionData')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.optionData?.message}
            {...register('optionData')}
          />
          <TextField
            id='resultKey'
            type='text'
            placeholder={t('DestinationInterface.label.resultKey')}
            label={t('DestinationInterface.label.resultKey')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.resultKey?.message}
            {...register('resultKey')}
          />
          <TextArea
            id='sql'
            placeholder={t('DestinationInterface.label.sql')}
            label={t('DestinationInterface.label.sql')}
            labelClassName='label-text'
            className='h-32 input input-bordered w-full text-white'
            helper={errors.sql?.message}
            {...register('sql')}
          />

          <TextArea
            id='memo'
            placeholder={t('DestinationInterface.label.memo')}
            label={t('DestinationInterface.label.memo')}
            labelClassName='label-text'
            className='h-32 input input-bordered w-full text-white'
            {...register('memo')}
          />
        </div>
        <div className='flex justify-between w-full'>
          <button type='button' className='btn btn-ghost' onClick={onClickClear}>
            {t('Common.button.clear')}
          </button>
          <button type='submit' className='btn' disabled={!isValid}>
            {t('Common.button.submit')}
          </button>
        </div>
      </form>
    </div>
  );
};
