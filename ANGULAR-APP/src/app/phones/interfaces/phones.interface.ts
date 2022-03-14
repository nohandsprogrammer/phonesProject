export interface Phone {
    id: string;
    url_hash?: string;
    brand_id?: string;
    name: string; 
    picture: string;
    released_at: string;
    body: string;
    os: string;
    storage: string;
    display_size: string;
    display_resolution: string;
    camera_pixels: string;
    video_pixels: string;
    ram: string;
    chipset: string;
    battery_size: string;
    battery_type: string;
    deleted_at?: string;
    created_at: string;
    updated_at: string;
}