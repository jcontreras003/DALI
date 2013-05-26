class FlightTicketsController < ApplicationController
  def index
    @flight_tickets = FlightTicket.all
  end

  def show
    @flight_ticket = FlightTicket.find(params[:id])
  end

  def new
    @flight_ticket = FlightTicket.new
  end

  def create
    @flight_ticket = FlightTicket.new(params[:flight_ticket])
    if @flight_ticket.save
      redirect_to @flight_ticket, :notice => "Successfully created flight ticket."
    else
      render :action => 'new'
    end
  end

  def edit
    @flight_ticket = FlightTicket.find(params[:id])
  end

  def update
    @flight_ticket = FlightTicket.find(params[:id])
    if @flight_ticket.update_attributes(params[:flight_ticket])
      redirect_to @flight_ticket, :notice  => "Successfully updated flight ticket."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @flight_ticket = FlightTicket.find(params[:id])
    @flight_ticket.destroy
    redirect_to flight_tickets_url, :notice => "Successfully destroyed flight ticket."
  end
end
