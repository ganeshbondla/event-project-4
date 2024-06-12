//Database

//Create Data

INSERT INTO events(event_name, event_price)
VALUES('HelloHYD', '1000');

//Read Data

SELECT * FROM events; //10

//Read On Single Record

SELECT * FROM events WHERE id=1;

//Read on multiple //0 valid //1 not valid

SELECT * FROM events WHERE status=0 AND isDeleted=0 ; //7

//update data

UPDATE events SET event_name='HYDhello', event_price='500' WHERE id='2';

//delete

DELETE FROM events WHERE id=2;
