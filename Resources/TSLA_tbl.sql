--Drop table stocks;

CREATE TABLE stocks(
	ID int,
	Date DATE,
	Open VARCHAR,
	High VARCHAR,
	Low VARCHAR,
	Close VARCHAR,
	Volume int,
	Ex_Dividend int, 
	Split_Ratio int,
	Adj_Open VARCHAR,	
	Adj_High VARCHAR, 	
	Adj_Low  VARCHAR,	
	Adj_Close VARCHAR,	
	Adj_Volume int
);
