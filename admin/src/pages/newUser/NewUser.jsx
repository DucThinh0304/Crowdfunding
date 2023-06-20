import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Thêm người dùng mới</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Tên tài khoản</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Tên người dùng</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Mật khẩu</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Số điện thoại</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Địa chỉ</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Nam</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Nữ</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Khác</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
