let accountArr = [];

document
  .getElementById("form_container")
  .addEventListener("click", (c) => {
    if (!c.target.classList.contains("submit")) {
      return;
    }
    c.preventDefault();
    let emailInp = document.getElementById("inpEmail");
    let passInp = document.getElementById("inpPass");
    let reEnterPass = document.getElementById("inpRePass");
    if (
      emailInp.value.trim() === "" ||
      passInp.value.trim() === "" ||
      reEnterPass.value.trim() === ""
    ) {
      alert(`Không được để trống, nhập lại`);
      return;
    }

    if (reEnterPass.value !== passInp.value) {
      alert(`Mật khẩu không giống nhau, nhập lại`);
      return;
    }
    let account = {
      email: emailInp.value,
      password: passInp.value,
      rePassword: reEnterPass.value,
    };
    accountArr.push(account);
    console.log(`user:`, accountArr);
  });
