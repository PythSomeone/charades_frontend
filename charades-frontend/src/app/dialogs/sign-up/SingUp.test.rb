require 'selenium-webdriver'
driver = Selenium::WebDriver.for :chrome
driver.navigate.to 'https://pythsomeone.github.io/charades-with-friends/h/h'
sleep(1)
driver.find_element(:xpath,'//*[@id="mat-slide-toggle-1"]/label/div/div').click
sleep(2)
driver.find_element(:xpath,'/html/body/app-root/ng-component/html/body/div/mat-card-content/div[2]/button[2]').click
sleep(2)
driver.find_element(:id,'UserName1').send_keys('Tester')
driver.find_element(:id,'Email1').send_keys('testowaniemch@gmail.com')
driver.find_element(:id,'Pass1').send_keys('Test123')
driver.find_element(:id,'Vision1').click
sleep(5)
driver.find_element(:id,'Pass2').send_keys('Test123')
driver.find_element(:id,'Vision2').click
sleep(5)
driver.find_element(:id,'Singup1').click
sleep(5)
