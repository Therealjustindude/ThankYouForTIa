class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]
  # def index
  #   @orders = Order.all

  #   render json: @orders
  # end

  # def show
  #   render json: @order
  # end

  def create
    new_order = Order.create
    order_params[:menu_selections].each{|obj|
      new_order.menu_selections.build(menu_item_id: obj[:id])
    }
    if new_order.save
      render json: new_order, status: :created, location: new_order
    else
      render json: new_order.errors, status: :unprocessable_entity
    end
  end

  def update
    if @order.update(:paid => true)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @order.destroy
  end

  private
    def set_order
      @order = Order.find(params[:id])
    end

    def order_params
      params.require(:order).permit(:id, :menu_selections => [:id, :title])
    end
end
