
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {

  "graphql_public": {
          Tables: {
            [_ in never]: never
          }
          Views: {
            [_ in never]: never
          }
          Functions: {
            "graphql":
{ Args: { "extensions"?: Json,"operationName"?: string,"query"?: string,"variables"?: Json }; Returns: Json
                           }
          }
          Enums: {
            [_ in never]: never
          }
          CompositeTypes: {
            [_ in never]: never
          }
        },"public": {
          Tables: {
            "events": {
                  Row: {
                    "couple_name": string,"created_at": string,"discount_amount": number,"event_date": string,"featured_slugs": (string)[],"id": string,"valid_until": string,"venue": string
                  }
                  ComputedFields: never
                  Insert: {
                    "couple_name": string,"created_at"?: string,"discount_amount"?: number,"event_date": string,"featured_slugs"?: (string)[],"id": string,"valid_until": string,"venue": string
                  }
                  Update: {
                    "couple_name"?: string,"created_at"?: string,"discount_amount"?: number,"event_date"?: string,"featured_slugs"?: (string)[],"id"?: string,"valid_until"?: string,"venue"?: string
                  }
                  Relationships: [

                  ]
                },"inventory_lots": {
                  Row: {
                    "expires_on": string,"id": string,"location_id": string,"lot_no": string,"product_id": string,"qty": number
                  }
                  ComputedFields: never
                  Insert: {
                    "expires_on": string,"id"?: string,"location_id": string,"lot_no": string,"product_id": string,"qty": number
                  }
                  Update: {
                    "expires_on"?: string,"id"?: string,"location_id"?: string,"lot_no"?: string,"product_id"?: string,"qty"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "inventory_lots_location_id_fkey"
      columns: ["location_id"]
isOneToOne: false
      referencedRelation: "locations"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "inventory_lots_product_id_fkey"
      columns: ["product_id"]
isOneToOne: false
      referencedRelation: "products"
      referencedColumns: ["id"]
    }
                  ]
                },"locations": {
                  Row: {
                    "id": string,"name": string,"type": string
                  }
                  ComputedFields: never
                  Insert: {
                    "id": string,"name": string,"type": string
                  }
                  Update: {
                    "id"?: string,"name"?: string,"type"?: string
                  }
                  Relationships: [

                  ]
                },"members": {
                  Row: {
                    "created_at": string,"display_name": string,"id": string,"line_user_id": string | null,"phone": string | null,"points": number,"role": string
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"display_name"?: string,"id": string,"line_user_id"?: string | null,"phone"?: string | null,"points"?: number,"role"?: string
                  }
                  Update: {
                    "created_at"?: string,"display_name"?: string,"id"?: string,"line_user_id"?: string | null,"phone"?: string | null,"points"?: number,"role"?: string
                  }
                  Relationships: [

                  ]
                },"notifications": {
                  Row: {
                    "created_at": string,"id": string,"kind": string,"member_id": string,"order_id": string | null,"read_at": string | null
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"id"?: string,"kind": string,"member_id": string,"order_id"?: string | null,"read_at"?: string | null
                  }
                  Update: {
                    "created_at"?: string,"id"?: string,"kind"?: string,"member_id"?: string,"order_id"?: string | null,"read_at"?: string | null
                  }
                  Relationships: [
                    {
      foreignKeyName: "notifications_member_id_fkey"
      columns: ["member_id"]
isOneToOne: false
      referencedRelation: "members"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "notifications_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "orders"
      referencedColumns: ["id"]
    }
                  ]
                },"order_items": {
                  Row: {
                    "name": string,"order_id": string,"product_id": string,"qty": number,"unit_price": number
                  }
                  ComputedFields: never
                  Insert: {
                    "name": string,"order_id": string,"product_id": string,"qty": number,"unit_price": number
                  }
                  Update: {
                    "name"?: string,"order_id"?: string,"product_id"?: string,"qty"?: number,"unit_price"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "order_items_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "orders"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "order_items_product_id_fkey"
      columns: ["product_id"]
isOneToOne: false
      referencedRelation: "products"
      referencedColumns: ["id"]
    }
                  ]
                },"orders": {
                  Row: {
                    "channel": string,"created_at": string,"discount": number,"event_id": string | null,"expires_at": string | null,"fulfillment": string,"id": string,"member_id": string | null,"number": string,"payment_method": string | null,"picked_up_at": string | null,"pickup_location_id": string | null,"pickup_token": string | null,"points_used": number,"shipping_address": Json | null,"shipping_fee": number,"status": string,"subtotal": number,"total": number
                  }
                  ComputedFields: never
                  Insert: {
                    "channel": string,"created_at"?: string,"discount"?: number,"event_id"?: string | null,"expires_at"?: string | null,"fulfillment": string,"id"?: string,"member_id"?: string | null,"number": string,"payment_method"?: string | null,"picked_up_at"?: string | null,"pickup_location_id"?: string | null,"pickup_token"?: string | null,"points_used"?: number,"shipping_address"?: Json | null,"shipping_fee"?: number,"status": string,"subtotal": number,"total": number
                  }
                  Update: {
                    "channel"?: string,"created_at"?: string,"discount"?: number,"event_id"?: string | null,"expires_at"?: string | null,"fulfillment"?: string,"id"?: string,"member_id"?: string | null,"number"?: string,"payment_method"?: string | null,"picked_up_at"?: string | null,"pickup_location_id"?: string | null,"pickup_token"?: string | null,"points_used"?: number,"shipping_address"?: Json | null,"shipping_fee"?: number,"status"?: string,"subtotal"?: number,"total"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "orders_event_id_fkey"
      columns: ["event_id"]
isOneToOne: false
      referencedRelation: "events"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "orders_member_id_fkey"
      columns: ["member_id"]
isOneToOne: false
      referencedRelation: "members"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "orders_pickup_location_id_fkey"
      columns: ["pickup_location_id"]
isOneToOne: false
      referencedRelation: "locations"
      referencedColumns: ["id"]
    }
                  ]
                },"payments": {
                  Row: {
                    "merchant_trade_no": string,"order_id": string,"raw": NonNullable<Json>,"received_at": string,"rtn_code": string,"trade_amount": number
                  }
                  ComputedFields: never
                  Insert: {
                    "merchant_trade_no": string,"order_id": string,"raw"?: NonNullable<Json>,"received_at"?: string,"rtn_code": string,"trade_amount": number
                  }
                  Update: {
                    "merchant_trade_no"?: string,"order_id"?: string,"raw"?: NonNullable<Json>,"received_at"?: string,"rtn_code"?: string,"trade_amount"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "payments_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "orders"
      referencedColumns: ["id"]
    }
                  ]
                },"point_ledger": {
                  Row: {
                    "created_at": string,"delta": number,"id": string,"member_id": string,"order_id": string | null,"reason": string
                  }
                  ComputedFields: never
                  Insert: {
                    "created_at"?: string,"delta": number,"id"?: string,"member_id": string,"order_id"?: string | null,"reason": string
                  }
                  Update: {
                    "created_at"?: string,"delta"?: number,"id"?: string,"member_id"?: string,"order_id"?: string | null,"reason"?: string
                  }
                  Relationships: [
                    {
      foreignKeyName: "point_ledger_member_id_fkey"
      columns: ["member_id"]
isOneToOne: false
      referencedRelation: "members"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "point_ledger_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "orders"
      referencedColumns: ["id"]
    }
                  ]
                },"products": {
                  Row: {
                    "allergens": (string)[],"category": string,"created_at": string,"description": string,"heating": (string)[],"id": string,"image_url": string | null,"ingredients": (string)[],"is_active": boolean,"name": string,"net_weight_g": number | null,"price": number,"servings": string,"shelf_life_days": number | null,"slug": string,"status": string,"storage": string,"tone": string
                  }
                  ComputedFields: never
                  Insert: {
                    "allergens"?: (string)[],"category"?: string,"created_at"?: string,"description"?: string,"heating"?: (string)[],"id"?: string,"image_url"?: string | null,"ingredients"?: (string)[],"is_active"?: boolean,"name": string,"net_weight_g"?: number | null,"price": number,"servings"?: string,"shelf_life_days"?: number | null,"slug": string,"status"?: string,"storage"?: string,"tone"?: string
                  }
                  Update: {
                    "allergens"?: (string)[],"category"?: string,"created_at"?: string,"description"?: string,"heating"?: (string)[],"id"?: string,"image_url"?: string | null,"ingredients"?: (string)[],"is_active"?: boolean,"name"?: string,"net_weight_g"?: number | null,"price"?: number,"servings"?: string,"shelf_life_days"?: number | null,"slug"?: string,"status"?: string,"storage"?: string,"tone"?: string
                  }
                  Relationships: [

                  ]
                },"stock_adjustments": {
                  Row: {
                    "actor_id": string | null,"created_at": string,"delta": number,"id": string,"lot_id": string,"reason": string
                  }
                  ComputedFields: never
                  Insert: {
                    "actor_id"?: string | null,"created_at"?: string,"delta": number,"id"?: string,"lot_id": string,"reason": string
                  }
                  Update: {
                    "actor_id"?: string | null,"created_at"?: string,"delta"?: number,"id"?: string,"lot_id"?: string,"reason"?: string
                  }
                  Relationships: [
                    {
      foreignKeyName: "stock_adjustments_actor_id_fkey"
      columns: ["actor_id"]
isOneToOne: false
      referencedRelation: "members"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "stock_adjustments_lot_id_fkey"
      columns: ["lot_id"]
isOneToOne: false
      referencedRelation: "inventory_lots"
      referencedColumns: ["id"]
    }
                  ]
                },"stock_reservations": {
                  Row: {
                    "id": number,"lot_id": string,"order_id": string,"qty": number
                  }
                  ComputedFields: never
                  Insert: {
                    "id"?: never,"lot_id": string,"order_id": string,"qty": number
                  }
                  Update: {
                    "id"?: never,"lot_id"?: string,"order_id"?: string,"qty"?: number
                  }
                  Relationships: [
                    {
      foreignKeyName: "stock_reservations_lot_id_fkey"
      columns: ["lot_id"]
isOneToOne: false
      referencedRelation: "inventory_lots"
      referencedColumns: ["id"]
    },{
      foreignKeyName: "stock_reservations_order_id_fkey"
      columns: ["order_id"]
isOneToOne: false
      referencedRelation: "orders"
      referencedColumns: ["id"]
    }
                  ]
                }
          }
          Views: {
            [_ in never]: never
          }
          Functions: {
            "_add_points":
{ Args: { "p_delta": number,"p_member": string,"p_order": string,"p_reason": string }; Returns: undefined
                           },
"_location_for":
{ Args: { "p_fulfillment": string }; Returns: string
                           },
"_next_order_number":
{ Args: { "p_prefix"?: string }; Returns: string
                           },
"adjust_stock":
{ Args: { "p_delta": number,"p_lot": string,"p_reason": string }; Returns: Json
                           },
"advance_order":
{ Args: { "p_order": string,"p_to": string }; Returns: Json
                           },
"commit_payment":
{ Args: { "p_amount": number,"p_raw": Json,"p_trade_no": string }; Returns: Json
                           },
"current_role_name":
{ Args: Record<PropertyKey, never>; Returns: string
                           },
"is_admin":
{ Args: Record<PropertyKey, never>; Returns: boolean
                           },
"is_staff":
{ Args: Record<PropertyKey, never>; Returns: boolean
                           },
"place_order":
{ Args: { "p_address": Json,"p_channel"?: string,"p_event_id": string,"p_fulfillment": string,"p_lines": Json,"p_payment_method": string,"p_use_points": boolean }; Returns: Json
                           },
"pos_sale":
{ Args: { "p_lines": Json,"p_location": string,"p_member_phone": string }; Returns: Json
                           },
"product_availability":
{ Args: Record<PropertyKey, never>; Returns: {
              "available": number,"location_id": string,"product_id": string
            }[]
                           },
"redeem_pickup":
{ Args: { "p_commit"?: boolean,"p_location": string,"p_token": string }; Returns: Json
                           },
"release_expired":
{ Args: Record<PropertyKey, never>; Returns: number
                           }
          }
          Enums: {
            [_ in never]: never
          }
          CompositeTypes: {
            [_ in never]: never
          }
        }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  "graphql_public": {
          Enums: {

          }
        },"public": {
          Enums: {

          }
        }
} as const
