import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


from flask import Flask,  jsonify


engine = create_engine("sqlite:///Output.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Output = Base.classes.Output

# Flask Setup
#################################################
app = Flask(__name__)

@app.route("/")
def Home():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f'<a href="/api/v1.0/names">/api/v1.0/names</a><br/>'
        f'<a href="/api/v1.0/passengers">/api/v1.0/passengers</a><br/>'
    )


@app.route("/api/v1.0/Stocks")
def Stocks():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(Output.Date, Output.Open, Output.High, Output.Low, Output.Close).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_stocks = []
    for Date, Open, High, Low, Close in results:
        Output_dict = {}
        Output_dict["Date"] = Date
        Output_dict["Open"] = Open
        Output_dict["High"] = High
        Output_dict["Low"] = Low
        Output_dict["Close"] = Close
        all_stocks.append(Output_dict)

    return jsonify(all_stocks)




if __name__ == "__main__":
    app.run(debug=True)