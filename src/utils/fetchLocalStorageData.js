// Xử lý để lưu thong tin đăng nhập (load lại trang dữ liệu không mất đi)
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
