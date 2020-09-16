class MenuSelectionSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :menu_item
	belongs_to :order
end
