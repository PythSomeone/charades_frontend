require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome

driver.navigate.to 'http://localhost:4200/h'

driver.find_element(:id,'openSignIn1').click
driver.find_element(:id,'signInUserModel1').send_keys('testowaniemch@gmail.com')
driver.find_element(:id,'password1').send_keys('test123')
driver.find_element(:id,'hide1').click
driver.find_element(:id,'hide1').click
driver.find_element(:id,'signIn1').click
sleep(3)

driver.find_element(:id,'toCategoriesManagement1').click
sleep(2)
driver.find_element(:id,'CreateCategories1').click
sleep(2)
driver.find_element(:id,'category1').send_keys('StarWars')
sleep(2)
driver.find_element(:id,'createCategory1').click
sleep(3)

driver.find_element(:id,'Category'+'Animals').click
sleep(2)
driver.find_element(:id,'openEditCategory'+'Animals').click
sleep(2)
driver.find_element(:id,'category4').clear
driver.find_element(:id,'category4').send_keys('AnimalsTest')
sleep(2)
driver.find_element(:id,'updateCategory1').click
driver.find_element(:id,'close1').click
sleep(3)

driver.find_element(:id,'newWord'+'AnimalsTest').send_keys('Kot')
sleep(2)
driver.find_element(:id,'createWord'+'AnimalsTest').click
sleep(2)
driver.find_element(:id,'Category'+'Animals').click
sleep(2)
driver.find_element(:id,'newWord'+'AnimalsTest').clear
driver.find_element(:id,'newWord'+'AnimalsTest').send_keys('Pies')
sleep(2)
driver.find_element(:id,'createWord'+'AnimalsTest').click
sleep(2)

driver.find_element(:id,'Category'+'Movies').click
sleep(2)
driver.find_element(:id,'openEditCategory'+'Movies').click
sleep(2)
driver.find_element(:id,'category4').clear
driver.find_element(:id,'category4').send_keys('MoviesTest')
sleep(2)
driver.find_element(:id,'updateCategory1').click
driver.find_element(:id,'close1').click
sleep(3)

driver.find_element(:id,'newWord'+'MoviesTest').clear
driver.find_element(:id,'newWord'+'MoviesTest').send_keys('Horror')
sleep(2)
driver.find_element(:id,'createWord'+'MoviesTest').click
sleep(2)
driver.find_element(:id,'Category'+'MoviesTest').click
driver.find_element(:id,'newWord'+'MoviesTest').clear
driver.find_element(:id,'newWord'+'MoviesTest').send_keys('Comedy')
sleep(2)
driver.find_element(:id,'createWord'+'MoviesTest').click
sleep(2)

driver.find_element(:id,'Category'+'StarWars').click
sleep(2)
driver.find_element(:id,'openEditCategory'+'StarWars').click
sleep(2)
driver.find_element(:id,'category4').clear
driver.find_element(:id,'category4').send_keys('StarWarsTest')
sleep(2)
driver.find_element(:id,'updateCategory1').click
driver.find_element(:id,'close1').click
sleep(3)

driver.find_element(:id,'newWord'+'StarWarsTest').clear
driver.find_element(:id,'newWord'+'StarWarsTest').send_keys('Obi wan')
sleep(2)
driver.find_element(:id,'createWord'+'StarWarsTest').click
sleep(2)
driver.find_element(:id,'Category'+'StarWarsTest').click
driver.find_element(:id,'newWord'+'StarWarsTest').clear
driver.find_element(:id,'newWord'+'StarWarsTest').send_keys('Anakin')
sleep(2)
driver.find_element(:id,'createWord'+'StarWarsTest').click
sleep(5)
driver.find_element(:id,'Category'+'StarWArsTest').click
driver.find_element(:id,'newWord'+'StarWarsTest').clear
driver.find_element(:id,'newWord'+'StarWarsTest').send_keys('Joda')
sleep(2)
driver.find_element(:id,'createWord'+'StarWarsTest').click
sleep(5)
driver.find_element(:id,'Category'+'StarWarsTest').click
driver.find_element(:id,'newWord'+'StarWarsTest').clear
driver.find_element(:id,'newWord'+'StarWarsTest').send_keys('Padme')
sleep(2)
driver.find_element(:id,'createWord'+'StarWarsTest').click
sleep(5)
driver.find_element(:id,'Category'+'StarWArsTest').click
driver.find_element(:id,'newWord'+'StarWarsTest').clear
driver.find_element(:id,'newWord'+'StarWarsTest').send_keys('Palpatine')
sleep(2)
driver.find_element(:id,'createWord'+'StarWarsTest').click
sleep(5)




