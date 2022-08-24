import '@/components/forms/react-select-style.css';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Label } from '@/components/Label';
import { SelectField } from '@/components/SelectField';
import { TextArea } from '@/components/TextArea';
import { TextField } from '@/components/TextField';
import { SourceSystem, SystemType } from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { useSourceSystem } from '@/pages/source-system/source-system.page';
import { RoutePath } from '@/router/paths';

interface ISourceSystemForm extends SourceSystem {
  systemType: '' | SystemType;
}

export const SourceSystemForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { sourceSystem, createSourceSystem, updateSourceSystem } = useSourceSystem();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ISourceSystemForm>({
    mode: 'onChange',
  });

  const onClickClear = () => {
    reset({
      id: 0,
      systemName: '',
      host: '',
      port: '',
      memo: '',
      systemType: '',
    });
    navigate(`${RoutePath.sourceSystem}`);
  };

  // TODO toast component 생성 후 alert 제거
  const onSubmit = (formData: ISourceSystemForm) => {
    const submitData: SourceSystem = {
      systemName: formData.systemName,
      host: formData.host,
      port: formData.port,
      memo: formData.memo || '',
      type: formData.systemType,
    } as SourceSystem;

    if (formData.id) {
      updateSourceSystem(formData.id, submitData);
    } else {
      createSourceSystem(submitData);
    }
  };

  useEffect(() => {
    if (!sourceSystem) return;
    const formData: ISourceSystemForm = {
      id: sourceSystem.id,
      systemName: sourceSystem.systemName,
      host: sourceSystem.host,
      port: sourceSystem.port,
      memo: sourceSystem.memo || '',
      systemType: sourceSystem.type,
    } as ISourceSystemForm;
    reset(formData);
  }, [sourceSystem]);

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
          <Label labelClassName='label-text'>{t('SourceSystem.label.systemType')}</Label>
          <SelectField
            id='type'
            required
            className='input input-bordered w-full text-white'
            defaultValue=''
            {...register('systemType', { required: t('SourceSystem.message.required') })}
            helper={errors.systemType?.message}
          >
            <option value=''>{t('SourceSystem.label.systemType')}</option>
            {Object.values(SystemType).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </SelectField>
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
