const employees = [
    {
        "id": 1,
        "name": "Amit",
        "email": "employee1@example.com",
        "password": "12345678",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile and summarize the monthly sales report.",
                "taskDate": "2024-10-30",
                "category": "Report"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project milestones with the client.",
                "taskDate": "2024-10-25",
                "category": "Meeting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Data Backup",
                "taskDescription": "Backup all important files to the cloud.",
                "taskDate": "2024-10-20",
                "category": "Maintenance"
            }
        ]
    },
    {
        "id": 2,
        "name": "Sneha",
        "email": "employee2@example.com",
        "password": "12345678",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Inventory Check",
                "taskDescription": "Verify stock levels in the warehouse.",
                "taskDate": "2024-11-01",
                "category": "Logistics"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Product Testing",
                "taskDescription": "Test the latest version of the software.",
                "taskDate": "2024-11-03",
                "category": "Quality Assurance"
            }
        ]
    },
    {
        "id": 3,
        "name": "Rajesh",
        "email": "employee3@example.com",
        "password": "12345678",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Onboarding Session",
                "taskDescription": "Train new employees on company protocols.",
                "taskDate": "2024-10-18",
                "category": "HR"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Website Update",
                "taskDescription": "Update the website with the latest news.",
                "taskDate": "2024-10-29",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "name": "Priya",
        "email": "employee4@example.com",
        "password": "12345678",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Analyze competitor pricing and products.",
                "taskDate": "2024-10-31",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "System Audit",
                "taskDescription": "Perform an audit of system security.",
                "taskDate": "2024-10-20",
                "category": "Audit"
            }
        ]
    },
    {
        "id": 5,
        "name": "Anjali",
        "email": "employee5@example.com",
        "password": "12345678",
        "taskNumber": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Social Media Campaign",
                "taskDescription": "Plan and execute a social media campaign.",
                "taskDate": "2024-11-02",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Monthly Budget Analysis",
                "taskDescription": "Review the monthly budget and suggest improvements.",
                "taskDate": "2024-10-28",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Code Review",
                "taskDescription": "Review code submissions from the development team.",
                "taskDate": "2024-10-23",
                "category": "Development"
            }
        ]
    }
]

const admin = [{
    "id": 1,
    "name": "Shna",
    "email": "admin@example.com",
    "password": "12345678",
}]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin }
}
