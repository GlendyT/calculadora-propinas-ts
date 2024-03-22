import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <> 
    <button 
     className="border-2 border-teal-400 hover:bg-teal-200 w-full p-2 flex justify-between"
     onClick={() => addItem(item)}
    > 
    <div>{item.name}</div>
    <div className="font-black">${item.price}</div>
    </button>
    </>
  )
}
