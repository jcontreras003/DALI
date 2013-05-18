class AirportsController < ApplicationController
  def index
    @airports = Airport.all
  end

  def show
    @airport = Airport.find(params[:id])
  end

  def new
    @airport = Airport.new
  end

  def create
    @airport = Airport.new(params[:airport])
    if @airport.save
      redirect_to @airport, :notice => "Successfully created airport."
    else
      render :action => 'new'
    end
  end

  def edit
    @airport = Airport.find(params[:id])
  end

  def update
    @airport = Airport.find(params[:id])
    if @airport.update_attributes(params[:airport])
      redirect_to @airport, :notice  => "Successfully updated airport."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @airport = Airport.find(params[:id])
    @airport.destroy
    redirect_to airports_url, :notice => "Successfully destroyed airport."
  end
end
