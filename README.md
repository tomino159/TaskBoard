# TaskBoard – Console TODO App in C#

A simple console application in C# that works as a text-based “taskboard”:
it lets you create projects, add tasks to projects, mark tasks as completed,
and save/load the state from a file in JSON format.

## Features

- Create projects
- Add tasks to a specific project
- Mark tasks as completed
- List all projects and their tasks
- Save projects and tasks to `taskboard.json`
- Load projects and tasks from `taskboard.json`

## Technologies Used

- C# (.NET console application)
- Lists (`List<T>`) for storing projects and tasks
- Basic OOP design (classes `Projekt` and `Uloha`)
- `System.Text.Json` for JSON serialization/deserialization
- `System.IO.File` for working with files

## Application Structure

- `Projekt`
  - Properties: `Nazov`, `List<Uloha> Ulohy`
  - Methods:
    - `PridajUlohu(string nazov, string popis)`
    - `NajdiUlohuPodlaId(int id)`
    - `VypisInfo()` – prints the project and its tasks

- `Uloha`
  - Properties: `Id`, `Nazov`, `Popis`, `Dokoncena`
  - Methods:
    - `OznacAkoDokoncenu()`
    - `VypisInfo()` – displays the task in the format `[V]/[X]` + name + description

- `Program` (main entry point)
  - Holds the list `List<Projekt> projekty`
  - Console menu with options 1–7

## Usage

When you run the program, the menu is displayed:

1. **Create project**  
   - You enter the project name, and the project is added to the list

2. **Add task to project**  
   - You select a project by its number from the list  
   - You enter the task name and description  
   - The task is added to the selected project

3. **Mark task as completed**  
   - You select a project  
   - You select a task by its number  
   - The task is marked as completed

4. **List all projects and tasks**  
   - Prints each project, task count, and its tasks  
   - Tasks are shown for example as `[X] Name` or `[V] Name`

5. **Save to file**  
   - Serializes the list of projects to JSON  
   - Saves the JSON to the `taskboard.json` file

6. **Load from file**  
   - Reads JSON from `taskboard.json`  
   - Deserializes it back into `List<Projekt>`  
   - Replaces the current `projekty` list with the loaded data

7. **Exit**  
   - Exits the application

## How to Run

1. Clone the repository:
   ```bash
   git clone <your-github-url>
   ```
2. Go to the project folder:
   ```bash
   cd TaskBoard
   ```
3. Run the app:
   ```bash
   dotnet run
   ```

## Why This Project Exists

This project was created as C# practice for a beginner:
- to practice basic OOP,
- working with lists,
- building a console menu,
- saving and loading data using JSON and files.

It serves as a simple foundation that can later be extended
with a GUI, a web API, or a fullstack version.
