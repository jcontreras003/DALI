Feature: Add_Airport 

  Background:
  Given the following cities available:
  id  | Name            |country_id            	 | 
  MAD | Madrid          |0034                    |
  BCN | Barcelona       |0034                    |
  CCS | Caracas 	|0058			 |   
  AND | Andorra         |0034 			 |
  AMS | Amsterdam       |0087 			 |

  Given the following countries available:
  id  | Name      |  Continent 	 		 |
  0034| España    |  Europe			 |
  0058| Venezuela |  South-America               |

  Given the following airports available:
  id  | Name            |  covered cities        |
  001 | Barajas         |MAD                     | 
  002 | El Prat         |BCN                     |
  003 | Andorra         |AND                     |
  
  
  Scenario: Add an Airport
  Given an aiport named "schipol" which serves to the city of "Amsterdam"
  When i add an airport
  Then i should get the following airports available:
  id  | Name            |  covered cities        |
  001 | Barajas         |MAD                     | 
  002 | El Prat         |BCN                     |
  003 | Andorra         |AND                     |
  004 | schipol         |AMS                     |

  Scenario: 001-Product discount 
  Given the following order
  |product_id|quantity|
  |001       |1       |
  |003       |1       |
  |001       |1       |
  And a "10%" purchase discount if the total price is over "60"
  And a "8.10%" product discount on product 001 if there are 2 or more units on the order  


Flight <Saves the flights of the weeks>
 
Nro. | depart time | arrive time | day    | origin(airport_id) |  destination(airport_id) |  
------------------------------------------ --------------------|--------------------------|
1209 | 12:00       |  14:00      | Monday |         MAD	       |          BCN             |
1308 | 14:00       |  16:00      | Tuesday|         BCN        |          AND             |
  When i make checkout
  Then i should get the total price of "36.95"

  Scenario: 001-Product discount and Purchase discount
  Given the following order
  |product_id|quantity|
  |001       |1       |
  |002       |1       |
  |001       |1       |
  |003       |1       | 
   And a "10%" purchase discount if the total price is over "60"
  And a "8.10%" product discount on product 001 if there are 2 or more units on the order 
  When i make checkout
  Then i should get the total price of "73.76"
