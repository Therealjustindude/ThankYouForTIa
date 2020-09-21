class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    new_order = Order.create
    params[:order][:id] = new_order.id
    params[:order][:menu_selections] = params[:menu_selections]
    order_params[:menu_selections].each{|obj|
      new_order.menu_selections.build(menu_item_id: obj[:id])
    }
    if new_order.save
      render json: new_order, status: :created, location: new_order
    else
      render json: new_order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    # makes order attribute paid = true
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def order_params
      params.require(:order).permit!
    end
end
