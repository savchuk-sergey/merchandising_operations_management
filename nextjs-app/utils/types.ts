export type order = {
  supplier_id: number
  wh_id: string
  pack: string
  qty: number
}

export type store = {
  store: string
  store_name: string
  store_manager: string
  phone_number: string
  store_type: string
  default_wh: string
  open_date: Date
  close_date: Date
}

export type wh = {
  wh: string
  wh_name: string
  wh_manager: string
  wh_address: string
}

// export type data = Array<order | supplier | shipment | item | pack | promotion | wh | store | >;
