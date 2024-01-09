import { message } from "antd";

const success = (mes = "Success") => {
  message.open({
    type: "success",
    content: mes,
  });
};

const error = (mes) => {
  message.open({
    type: "error",
    content: mes,
  });
};

const warning = (mes = "Warning") => {
  message.open({
    type: "warning",
    content: mes,
  });
};

export { success, error, warning };
