export interface LocaleType {
  Common: {
    navBarTitle: string;
    menu: {
      home: string;
      logout: string;
    };
    footer: {
      copyright: string;
    };
    button: {
      clear: string;
      submit: string;
    };
    message: {
      saveSuccess: string;
      saveFailed: string;
    };
  };
  Home: {
    title: string;
  };
  Login: {
    title: string;
    subTitle: string;
    label: {
      email: string;
      password: string;
    };
    message: {
      requiredEmail: string;
      invalidatedEmail: string;
      requiredPassword: string;
    };
    button: {
      login: string;
    };
  };
  SourceSystem: {
    title: string;
    label: {
      systemName: string;
      systemType: string;
      host: string;
      port: string;
      memo: string;
    };
    message: {
      required: string;
    };
  };
  SourceInterface: {
    title: string;
    label: {
      id: string;
      interfaceName: string;
      memo: string;
      method: string;
      header: string;
      optionData: string;
      payload: string;
      pkItems: string;
      resultKey: string;
      sourceSystemId: string;
      sql: string;
      uri: string;
    };
    message: {
      required: string;
    };
  };
  DestinationSystem: {
    title: string;
  };
  DestinationInterface: {
    title: string;
    label: {
      id: string;
      interfaceName: string;
      memo: string;
      method: string;
      header: string;
      optionData: string;
      payload: string;
      resultKey: string;
      destinationSystemId: string;
      sql: string;
      uri: string;
    };
    message: {
      required: string;
    };
  };
}
