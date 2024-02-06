// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::exit;  // Import the exit function
use tauri::{SystemTray, SystemTrayMenu, CustomMenuItem, SystemTrayEvent, Manager};  // Import Manager trait

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    // Create a menu for the system tray
    let tray_menu = SystemTrayMenu::new()
        .add_item(CustomMenuItem::new("quit".to_string(), "Quit"))
        .add_item(CustomMenuItem::new("minimize".to_string(), "Minimize"));

    // Create a system tray with the menu
    let system_tray = SystemTray::new()
        .with_menu(tray_menu);

    // Build the Tauri application
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| {
            match event {
                SystemTrayEvent::MenuItemClick { id, .. } => {
                    match id.as_str() {
                        "quit" => {
                            // Handle quit action (close the app)
                            exit(0);
                        }
                        "minimize" => {
                            // Handle minimize action (hide the window)
                            let window = app.get_window("main").unwrap();
                            window.hide().unwrap();
                        }
                        _ => {}
                    }
                }
                _ => {}
            }
        })
        .on_window_event(|event| {
            match event.event() {
                tauri::WindowEvent::CloseRequested { api, .. } => {
                    event.window().hide().unwrap();
                    api.prevent_close();
                }
                _ => {}
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
