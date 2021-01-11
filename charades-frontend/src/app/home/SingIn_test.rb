require 'selenium-webdriver'
driver = Selenium::WebDriver.for :chrome
driver.navigate.to 'http://localhost:4200/h'
sleep(1)
driver.find_element(:xpath,'//*[@id="mat-slide-toggle-1"]/label/div/div').click
sleep(2)
driver.find_element(:xpath,'/html/body/app-root/ng-component/html/body/div/mat-card-content/div[2]/button[1]').click
sleep(2)
driver.find_element(:id,'Email1').send_keys('testowaniemch@gmail.com')
driver.find_element(:id,'Pass1').send_keys('Test')
sleep(2)
driver.find_element(:id,'Vision1').click
sleep(2)
driver.find_element(:id,'Singin1').click
sleep(5)

