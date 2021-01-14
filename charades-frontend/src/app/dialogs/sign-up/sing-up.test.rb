require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome

driver.navigate.to 'http://localhost:4200/h'
sleep(3)
driver.find_element(:id,'mat-slide-toggle-1').click

sleep(2)
driver.find_element(:id,'openSignUp1').click
sleep(1)
driver.find_element(:id,'signUp1').send_keys('Test')
sleep(1)
driver.find_element(:id,'signUp2').send_keys('testowaniemch@gmail.com')
sleep(1)
driver.find_element(:id,'password1').send_keys('test123')
driver.find_element(:id,'hide1').click
sleep(3)
driver.find_element(:id,'password2').send_keys('test123')
driver.find_element(:id,'hide2').click
sleep(3)
driver.find_element(:id,'signUp3').click
sleep(3)

