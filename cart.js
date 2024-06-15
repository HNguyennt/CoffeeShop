function addDrink(){
    // Lấy tất cả phần từ có id="drink"
    let drinks = document.querySelectorAll("#drink")

    // Mảng rỗng để lấy data đồ uống
    let checkedDrink = []
    for(let drink of drinks){
        // Nếu ô checkbox đc chọn -> thêm vào array
        if(drink.checked){
            checkedDrink.push(drink.value)
        }
    }
    //Giá trị data
    console.log("checkedDrink:", checkedDrink)
}