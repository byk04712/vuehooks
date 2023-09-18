/**
 * status: loading, error, success, empty
 */
type ViewStatus = "loading" | "error" | "success" | "empty";

export interface SkeletonProps<T = any> {
  status: ViewStatus;
  result: T;
  placeholderResult: T;
  emptyMsg?: string;
  errorMsg?: string;
  /**
   * 评定为空情况
   * @param result 返回的数据
   */
  isEmpty?: (result: T) => boolean;
}
