class MenuSelectionsController < ApplicationController
  before_action :set_menu_selection, only: [:show, :update, :destroy]

  private
    def set_menu_selection
      @menu_selection = MenuSelection.find(params[:id])
    end

    def menu_selection_params
      params.require(:menu_selection)
    end
end
