import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements AfterViewInit {
    displayedColumns: string[] = ['id', 'name', 'phone', 'status', 'action', 'send']
    personList: PeopleList = new PeopleList()
    dataSource = new MatTableDataSource<Person>(this.personList.people)
    autorizados!: number
    noAutorizados!: number
    pendientes!: number

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) {
        this.autorizados = 0
        this.noAutorizados = 0
        this.pendientes = 0
    }

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort

    ngOnInit() {
        this.dataSource.sort = this.sort
        this.getStatus()
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onClick() {
        this.authService.logout()
            .then(() => {
                this.router.navigate(['/login'])
            })
            .catch(err => console.log(err))
    }

    getStatus() {
        const autorizado = this.personList.people.filter(person => {
            return person.action === "autorizado"
        })
        console.log(autorizado)

        const noAutorizado = this.personList.people.filter(person => {
            return person.status === "active"
        })
        console.log(noAutorizado)
        this.noAutorizados = noAutorizado.length

        const pendiente = this.personList.people.filter(person => {
            return person.status === "pendiente"
        })
        console.log(pendiente)
    }
}

export class Person {
    id: number
    name: string
    phone: string
    status: string
    action: string

    constructor(id: number, name: string, phone: string, status: string, action: string) {
        this.id = id
        this.name = name
        this.phone = phone
        this.status = status
        this.action = action
    }
}

export class PeopleList {
    people: Person[]

    constructor() {
        const peopleData = [
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'autorizado', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
            { id: 1, name: 'John Doe', phone: '555-1234', status: 'active', action: 'edit' },
            { id: 2, name: 'Jane Smith', phone: '555-5678', status: 'inactive', action: 'edit' },
            { id: 3, name: 'Bob Johnson', phone: '555-9101', status: 'active', action: 'edit' },
        ]

        this.people = peopleData.map(personData => new Person(personData.id, personData.name, personData.phone, personData.status, personData.action))
    }
}