class CreateMenuSelections < ActiveRecord::Migration[6.0]
  def change
    create_table :menu_selections do |t|
      t.integer :menu_item_id
      t.integer :order_id

      t.timestamps
    end
  end
end
