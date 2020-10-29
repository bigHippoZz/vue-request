import { ref, Ref } from 'vue';

export type Config<R, P extends any[]> = {
  defaultParams?: P;
  manual?: boolean;
  ready?: Ref<boolean>;
  throwOnError?: boolean;
  initialData?: R;
  refreshDeps?: Ref<any>[];
  loadingDelay?: number;
  // TODO: 正确处理 formatResult 返回值类型和普通请求返回值类型
  formatResult?: (data: any) => R;
  onSuccess?: (data: R, params: P) => void;
  onError?: (error: Error, params: P) => void;
};

const DefaultConfig: Config<any, any> = {
  defaultParams: [],
  manual: false,
  ready: ref(true),
  throwOnError: false,
};
export default DefaultConfig as Required<Config<any, any>>;
