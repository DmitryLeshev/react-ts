import { useCallback } from "react";
import { useSnackbar } from "notistack";

interface Props {
  msg: string;
  variant: "success" | "error" | "warning";
}

export default () => {
  const { enqueueSnackbar } = useSnackbar();

  return useCallback(
    (props: Props) => {
      const { msg, variant } = props;
      enqueueSnackbar(msg, { variant });
    },
    [enqueueSnackbar]
  );
};
