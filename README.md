This is my first project with playwright. 
Using the app URL: https://www.saucedemo.com/

Tests:

1. Invalid_Login: Input datas falses in the fields login and password.
Expect: Who a message "Epic sadface: Username and password do not match any user in this service" to be visible.

2. Login: Input correct data.
Expect: Access the apllication and to be visible the text "Sauce Labs".

3. Validate product description: Validate if all product on the page have the text "Sauce Labs".
Expect: Whath return one product without text "Sauce Labs".

