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


driver.find_element(:id,'toCreateGame1').click
sleep(1)
driver.find_element(:id,'toLobbyAnimalsTest').click
sleep(1)
driver.find_element(:id,'toLobbyStarWarsTest').click
sleep(1)
driver.find_element(:id,'player1').send_keys('Michal')
sleep(1)
driver.find_element(:id,'addplayer1').click
sleep(1)
driver.find_element(:id,'player1').send_keys('Andrzej')
sleep(1)
driver.find_element(:id,'addplayer1').click
sleep(1)
driver.find_element(:id,'player1').send_keys('Jakub')
sleep(1)
driver.find_element(:id,'addplayer1').click
sleep(1)
driver.find_element(:id,'player1').send_keys('Damian')
sleep(1)
driver.find_element(:id,'addplayer1').click
sleep(1)
driver.find_element(:id,'removeDamian').click
sleep(1)
driver.find_element(:id,'start1').click
sleep(2)

driver.find_element(:id,'addPointsMichal').click
sleep(2)
driver.find_element(:id,'ready1').click
sleep(2)
driver.find_element(:id,'addPointsAndrzej').click
sleep(2)
driver.find_element(:id,'endGame1').click
sleep(2)
driver.find_element(:id,'End1').click
sleep(5)

wait=Selenium::WebDriver::Wait.new(:Timeout=>10)
wait.until{
  driver.find_element(:id,'backToProfile1').text
}

sleep(2)
driver.find_element(:id,'backToProfile1').click
sleep(5)

wait=Selenium::WebDriver::Wait.new(:Timeout=>10)
wait.until{
  driver.find_element(:xpath,'/html/body/app-root/app-profile/html/body/div/p').text
}
