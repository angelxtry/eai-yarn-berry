import { LocaleType } from '@/locale/resources/types/locale.type';

export const ko: LocaleType = {
  Common: {
    navBarTitle: 'EAI Admin',
    menu: {
      home: 'Home',
      logout: 'Logout',
    },
    footer: {
      copyright: 'Copyright: Copyright 2022 - All right reserved',
    },
    button: {
      clear: 'clear',
      submit: 'submit',
    },
    message: {
      saveSuccess: '저장했습니다',
      saveFailed: '저장에 실패했습니다.',
    },
  },
  Home: {
    title: 'Home',
  },
  Login: {
    title: 'GOMI Core EAI Admin',
    subTitle: '계정이 필요하신 분은 코어 개발팀으로 연락주세요.',
    label: {
      email: 'Email',
      password: 'Password',
    },
    message: {
      requiredEmail: '이메일을 입력해주세요',
      invalidatedEmail: '이메일 형식이 아닙니다',
      requiredPassword: '비밀번호를 입력해주세요',
    },
    button: {
      login: 'Login',
    },
  },
  SourceSystem: {
    title: 'Source System',
    label: {
      systemName: 'System Name',
      systemType: 'System Type',
      host: 'Host',
      port: 'Port',
      memo: 'Memo',
    },
    message: {
      required: '필수값 입니다',
    },
  },
  SourceInterface: {
    title: 'Source Interface',
    label: {
      id: 'ID',
      interfaceName: 'Interface Name',
      memo: 'Memo',
      method: 'Method',
      header: 'Header',
      optionData: 'Option Data',
      payload: 'Payload',
      pkItems: 'PK Items',
      resultKey: 'Result Key',
      sourceSystemId: 'Source System Id',
      sql: 'SQL',
      uri: 'URI',
    },
    message: {
      required: '필수값 입니다',
    },
  },
  DestinationSystem: {
    title: 'Destination System',
  },
  DestinationInterface: {
    title: 'Destination Interface',
    label: {
      id: 'ID',
      interfaceName: 'Interface Name',
      memo: 'Memo',
      method: 'Method',
      header: 'Header',
      optionData: 'Option Data',
      payload: 'Payload',
      resultKey: 'Result Key',
      destinationSystemId: 'Destination System Id',
      sql: 'SQL',
      uri: 'URI',
    },
    message: {
      required: '필수값 입니다',
    },
  },
};
