require 'test_helper'

class MenuSelectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @menu_selection = menu_selections(:one)
  end

  test "should get index" do
    get menu_selections_url, as: :json
    assert_response :success
  end

  test "should create menu_selection" do
    assert_difference('MenuSelection.count') do
      post menu_selections_url, params: { menu_selection: { order_id: @menu_selection.order_id, user_id: @menu_selection.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show menu_selection" do
    get menu_selection_url(@menu_selection), as: :json
    assert_response :success
  end

  test "should update menu_selection" do
    patch menu_selection_url(@menu_selection), params: { menu_selection: { order_id: @menu_selection.order_id, user_id: @menu_selection.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy menu_selection" do
    assert_difference('MenuSelection.count', -1) do
      delete menu_selection_url(@menu_selection), as: :json
    end

    assert_response 204
  end
end
