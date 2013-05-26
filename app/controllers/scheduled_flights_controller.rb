class ScheduledFlightsController < ApplicationController
  def index
    @scheduled_flights = ScheduledFlight.all
  end

  def show
    @scheduled_flight = ScheduledFlight.find(params[:id])
  end

  def new
    @scheduled_flight = ScheduledFlight.new
  end

  def create
    @scheduled_flight = ScheduledFlight.new(params[:scheduled_flight])
    if @scheduled_flight.save
      redirect_to @scheduled_flight, :notice => "Successfully created scheduled flight."
    else
      render :action => 'new'
    end
  end

  def edit
    @scheduled_flight = ScheduledFlight.find(params[:id])
  end

  def update
    @scheduled_flight = ScheduledFlight.find(params[:id])
    if @scheduled_flight.update_attributes(params[:scheduled_flight])
      redirect_to @scheduled_flight, :notice  => "Successfully updated scheduled flight."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @scheduled_flight = ScheduledFlight.find(params[:id])
    @scheduled_flight.destroy
    redirect_to scheduled_flights_url, :notice => "Successfully destroyed scheduled flight."
  end
end
