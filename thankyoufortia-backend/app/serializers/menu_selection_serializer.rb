class MenuSelectionSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :order_id
  belongs_to :menu_item
	belongs_to :order
end
