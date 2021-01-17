require 'selenium-webdriver'
require "rest-client"
require "test-unit"

driver = Selenium::WebDriver.for :chrome

driver.navigate.to 'http://localhost:4200/h'

driver.find_element(:id,'openSignIn1').click
driver.find_element(:id,'signInUserModel1').send_keys('testowaniemch@gmail.com')
sleep(2)
driver.find_element(:id,'password1').send_keys('test123')
driver.find_element(:id,'hide1').click
sleep(2)
driver.find_element(:id,'hide1').click
sleep(2)
driver.find_element(:id,'signIn1').click
sleep(2)

wait=Selenium::WebDriver::Wait.new(:Timeout=>10)
wait.until{
 driver.find_element(:xpath,'/html/body/app-root/app-profile/html/body/div/h1').text
}
