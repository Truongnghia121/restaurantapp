// Xử lý để lưu thong tin đăng nhập (load lại trang dữ liệu không mất đi)
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

// Xử lý để lưu thong tin gio hang (load lại trang dữ liệu không mất đi)
export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
