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

driver.find_element(:id,'toSettings1').click
sleep(2)
driver.find_element(:id,'language1').click
sleep(2)
driver.find_element(:id,'translator'+'pl').click
sleep(3)
driver.find_element(:id,'translator'+'en').click
sleep(3)
driver.find_element(:id,'theme1').click
sleep(2)
driver.find_element(:id,'setDark1').click
sleep(2)
driver.find_element(:id,'setLight1').click
sleep(2)
driver.find_element(:id,'change-nick1').click
sleep(2)
driver.find_element(:id,'username1').clear
sleep(2)
driver.find_element(:id,'username1').send_keys('tester')
sleep(2)
driver.find_element(:id,'changeUsername1').click
sleep(2)
driver.find_element(:id,'change-mail1').click
sleep(2)
driver.find_element(:id,'email1').send_keys('testowaniemch@gmail.com')
sleep(2)
driver.find_element(:id,'changeEmail1').click
sleep(2)
driver.find_element(:id,'toProfile1').click
sleep(3)

