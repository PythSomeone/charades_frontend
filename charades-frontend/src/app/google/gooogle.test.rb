require 'selenium-webdriver'
driver = Selenium::WebDriver.for :chrome
driver.navigate.to 'http://localhost:4200/h'

driver.manage.window.maximize

sleep(1)
driver.find_element(:xpath,'/html/body/app-root/ng-component/html/body/div/mat-card-content/div[1]/app-google/button').click
sleep(60)
driver.find_element(:name,'email').send_keys('Test')
driver.find_element(:name,'pass').send_keys('Test')

sleep(5)
