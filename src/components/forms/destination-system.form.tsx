import '@/components/forms/react-select-style.css';

import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { Label } from '@/components/Label';
import { TextArea } from '@/components/TextArea';
import { TextField } from '@/components/TextField';
import { DestinationSystemContainer } from '@/containers/destination-system.container';
import {
  CreateDestinationSystemInput,
  DestinationSystem,
  SystemType,
} from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { useDestinationSystem } from '@/pages/destination-system/destination-system.page';
import { RoutePath } from '@/router/paths';

interface IDestinationSystemForm extends DestinationSystem {
  systemType: { label: SystemType; value: SystemType } | null;
}

const defaultValues = {
  id: 0,
  systemName: '',
  host: '',
  port: '',
  memo: '',
  systemType: null,
} as IDestinationSystemForm;

export const DestinationSystemForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { destinationSystem, createDestinationSystem, updateDestinationSystem } =
    useDestinationSystem();

  const { systemTypeOptions } = DestinationSystemContainer({});

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IDestinationSystemForm>({
    mode: 'onChange',
  });

  const onClickClear = () => {
    reset(defaultValues);
    navigate(RoutePath.destinationSystem);
  };

  const onSubmit = (formData: IDestinationSystemForm) => {
    const submitData: CreateDestinationSystemInput = {
      systemName: formData.systemName,
      host: formData.host,
      port: formData.port,
      memo: formData.memo || '',
      type: formData.systemType?.value,
    } as CreateDestinationSystemInput;

    if (formData.id) {
      updateDestinationSystem(formData.id, submitData);
    } else {
      createDestinationSystem(submitData);
    }
  };

  useEffect(() => {
    if (!destinationSystem) return;
    const formData = {
      ...destinationSystem,
      systemType: systemTypeOptions.find(
        (option) => option.value === destinationSystem.type,
      ),
    };
    reset(formData);
  }, [destinationSystem]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-ful'>
          <TextField id='id' type='text' className='hidden' {...register('id')} />
          <TextField
            id='systemName'
            type='text'
            placeholder={t('SourceSystem.label.systemName')}
            label={t('SourceSystem.label.systemName')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.systemName?.message}
            {...register('systemName', { required: t('SourceSystem.message.required') })}
          />
          <Label labelClassName='label-text'>
            {t('SourceInterface.label.sourceSystemId')}
          </Label>
          <Controller
            name='systemType'
            control={control}
            rules={{ required: t('SourceInterface.message.required') }}
            render={({ field: { onChange, value, ref } }) => (
              <Select
                ref={ref}
                isClearable
                onChange={(data) => onChange(data)}
                value={systemTypeOptions.find((option) => option.value === value?.value)}
                options={systemTypeOptions}
              />
            )}
          />
          <TextField
            id='host'
            type='text'
            placeholder={t('SourceSystem.label.host')}
            label={t('SourceSystem.label.host')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.host?.message}
            {...register('host', { required: t('SourceSystem.message.required') })}
          />
          <TextField
            id='port'
            type='text'
            placeholder={t('SourceSystem.label.port')}
            label={t('SourceSystem.label.port')}
            labelClassName='label-text'
            className='input input-bordered w-full text-white'
            helper={errors.port?.message}
            {...register('port', { required: t('SourceSystem.message.required') })}
          />

          <TextArea
            id='memo'
            placeholder={t('SourceSystem.label.memo')}
            label={t('SourceSystem.label.memo')}
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
