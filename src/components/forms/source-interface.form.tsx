import '@/components/forms/react-select-style.css';

import debounce from 'lodash.debounce';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { Label } from '@/components/Label';
import { TextArea } from '@/components/TextArea';
import { TextField } from '@/components/TextField';
import { CreateSourceInterfaceInput, SourceInterface } from '@/generated/graphql';
import { useSourceSystemSearch } from '@/hooks/useSourceSystemSearch';
import { useTranslation } from '@/locale/i18n';
import { useSourceInterface } from '@/pages/source-interface/source-interface.page';
import { RoutePath } from '@/router/paths';

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
  sourceSystemId: 0,
  sql: '',
  uri: '',
};

export const SourceInterfaceForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>('');

  const debounceSearchText = useCallback(debounce(setSearchText, 300), []);

  const { sourceInterface, createSourceInterface, updateSourceInterface } =
    useSourceInterface();

  const { isLoading, sourceSystemsOption } = useSourceSystemSearch(searchText);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<SourceInterface>({
    mode: 'onChange',
  });

  const onClickClear = () => {
    reset(defaultValues);
    navigate(RoutePath.sourceInterface);
  };

  const onSubmit = (formData: SourceInterface) => {
    const submitData: CreateSourceInterfaceInput = {
      header: formData.header,
      interfaceName: formData.interfaceName,
      memo: formData.memo,
      method: formData.method,
      optionData: formData.optionData,
      payload: formData.payload,
      pkItems: formData.pkItems,
      resultKey: formData.resultKey,
      sourceSystemId: formData.sourceSystemId,
      sql: formData.sql,
      uri: formData.uri,
    } as CreateSourceInterfaceInput;

    if (formData.id) {
      updateSourceInterface(formData.id, submitData);
    } else {
      createSourceInterface(submitData);
    }
  };

  useEffect(() => {
    if (!sourceInterface) return;
    reset(sourceInterface);
  }, [sourceInterface]);

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-ful'>
          <TextField id='id' type='text' className='hidden' {...register('id')} />
          <TextField
            id='interfaceName'
            type='text'
            placeholder={t('SourceInterface.label.interfaceName')}
            label={t('SourceInterface.label.interfaceName')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.interfaceName?.message}
            {...register('interfaceName', {
              required: t('SourceInterface.message.required'),
            })}
          />
          <Label labelClassName='label-text'>
            {t('SourceInterface.label.sourceSystemId')}
          </Label>
          <Controller
            name='sourceSystemId'
            control={control}
            rules={{ required: t('SourceInterface.message.required') }}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                ref={ref}
                isClearable
                isSearchable
                isLoading={isLoading}
                onInputChange={debounceSearchText}
                onChange={(data) => onChange(data)}
                value={sourceSystemsOption?.find((o) => o.value === value)}
                options={sourceSystemsOption}
              />
            )}
          />
          <TextField
            id='uri'
            type='text'
            placeholder={t('SourceInterface.label.uri')}
            label={t('SourceInterface.label.uri')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.uri?.message}
            {...register('uri', { required: t('SourceInterface.message.required') })}
          />
          <TextField
            id='method'
            type='text'
            placeholder={t('SourceInterface.label.method')}
            label={t('SourceInterface.label.method')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.method?.message}
            {...register('method', { required: t('SourceInterface.message.required') })}
          />
          <TextField
            id='header'
            type='text'
            placeholder={t('SourceInterface.label.header')}
            label={t('SourceInterface.label.header')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.header?.message}
            {...register('header', { required: t('SourceInterface.message.required') })}
          />
          <TextArea
            id='payload'
            placeholder={t('SourceInterface.label.payload')}
            label={t('SourceInterface.label.payload')}
            labelClassName='label-text'
            className='h-32 input input-bordered w-full text-white'
            helper={errors.payload?.message}
            {...register('payload', { required: t('SourceInterface.message.required') })}
          />
          <TextField
            id='optionData'
            type='text'
            placeholder={t('SourceInterface.label.optionData')}
            label={t('SourceInterface.label.optionData')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.optionData?.message}
            {...register('optionData')}
          />
          <TextField
            id='pkItems'
            type='text'
            placeholder={t('SourceInterface.label.pkItems')}
            label={t('SourceInterface.label.pkItems')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.pkItems?.message}
            {...register('pkItems')}
          />
          <TextField
            id='resultKey'
            type='text'
            placeholder={t('SourceInterface.label.resultKey')}
            label={t('SourceInterface.label.resultKey')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.resultKey?.message}
            {...register('resultKey')}
          />
          <TextArea
            id='sql'
            placeholder={t('SourceInterface.label.sql')}
            label={t('SourceInterface.label.sql')}
            labelClassName='label-text'
            className='h-32 input input-bordered w-full text-white'
            helper={errors.sql?.message}
            {...register('sql')}
          />

          <TextArea
            id='memo'
            placeholder={t('SourceInterface.label.memo')}
            label={t('SourceInterface.label.memo')}
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
