import { useForm } from 'react-hook-form';

import { AuthContainer } from '@/containers/auth.container';
import { LoginInput } from '@/generated/graphql';
import { useTranslation } from '@/locale/i18n';
import { regexValidationRules } from '@/utils/regex-validation-rules';

export const LoginPage = () => {
  const { t } = useTranslation();
  const { login } = AuthContainer();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInput>({
    mode: 'onChange',
  });

  const onSubmit = (formData: LoginInput) => {
    login({ formData });
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>{t('Login.title')}</h1>
          <p className='py-6'>{t('Login.subTitle')}</p>
        </div>
        <form
          className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>{t('Login.label.email')}</span>
              </label>
              <input
                type='text'
                placeholder={t('Login.message.requiredEmail')}
                className='input input-bordered'
                {...register('email', {
                  required: t('Login.message.requiredEmail'),
                  pattern: {
                    value: regexValidationRules.email,
                    message: t('Login.message.invalidatedEmail'),
                  },
                })}
              />
              {errors.email && <p className='pt-1 text-sm'>{errors.email.message}</p>}
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>{t('Login.label.password')}</span>
              </label>
              <input
                type='password'
                placeholder={t('Login.message.requiredPassword')}
                className='input input-bordered'
                {...register('password', {
                  required: t('Login.message.requiredPassword'),
                })}
              />
              {errors.password && (
                <p className='pt-1 text-sm'>{errors.password.message}</p>
              )}
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary' disabled={!isValid} type='submit'>
                {t('Login.button.login')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
