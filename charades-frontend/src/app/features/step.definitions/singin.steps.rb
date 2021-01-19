
require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome

Given('I am on the login screen') do

  driver.navigate.to 'http://localhost:4200/h'
  sleep(5)
end
When('I login with correct details') do

  driver.find_element(:id,'openSignIn1').click
  sleep(2)
  driver.find_element(:id,'signInUserModel1').send_keys('testowaniemch@gmail.com')
  sleep(2)
  driver.find_element(:id,'password1').send_keys('test123')
  sleep(2)
  driver.find_element(:id,'hide1').click
  sleep(2)
  driver.find_element(:id,'hide1').click
  sleep(2)
  driver.find_element(:id,'signIn1').click
  sleep(2)

end
Then('I am logged in') do
  puts('User signed successfully')
end

Given('I am on the login screen') do
  driver.navigate.to 'http://localhost:4200/h'
  sleep(5)
end
When('I login with incorrect details') do
  driver.find_element(:id,'openSignIn1').click
  sleep(2)
  driver.find_element(:id,'signInUserModel1').send_keys('testowaniemch@gmail.pl')
  sleep(2)
  driver.find_element(:id,'password1').send_keys('test')
  sleep(2)
  driver.find_element(:id,'hide1').click
  sleep(2)
  driver.find_element(:id,'hide1').click
  sleep(2)
  driver.find_element(:id,'signIn1').click
  sleep(2)
end
Then('I am not logged in') do
  puts('Something went wrong')
end
