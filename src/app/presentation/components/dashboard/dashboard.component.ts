import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

import { AuthService } from '@auth0/auth0-angular'
import { LeadsTableEntity } from 'src/app/domain/entities/leads.table-entity';
import { LeadsService } from 'src/app/infrastructure/services/leads.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements AfterViewInit, OnInit {
    
    displayedColumns: string[] = ['id', 'phone', 'state', 'status', 'created', 'completed', 'pdf', 'action', 'send']
    
    leadsTable?: LeadsTableEntity
    dataSource: MatTableDataSource<LeadsTableEntity> = new MatTableDataSource<LeadsTableEntity>
    autorizados!: number | undefined
    noAutorizados!: number | undefined
    pendientes!: number | undefined

    constructor(
        private readonly auth0: AuthService,
        private readonly leadsService: LeadsService
    ) {
        this.autorizados = 0
        this.noAutorizados = 0
        this.pendientes = 0
    }
    ngOnInit(): void {
        this.loadLeads()
    }

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort!: MatSort

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.getStatus()
    }

    logOut(): void {
        this.auth0.logout()
    }

    loadLeads(): void {
        this.leadsService.getLeads()
            .subscribe(res => {
                this.leadsTable = new LeadsTableEntity(res.leadsData)
                this.dataSource = new MatTableDataSource<LeadsTableEntity>([this.leadsTable])
            })
    }

    getStatus(): void {
        const autorizado = this.leadsTable?.leadsData.filter(lead => {
            return lead.status === 1
        })
        this.autorizados = autorizado?.length

        const noAutorizado = this.leadsTable?.leadsData.filter(lead => {
            return lead.status === 2
        })
        this.noAutorizados = noAutorizado?.length

        const pendiente = this.leadsTable?.leadsData.filter(lead => {
            return lead.status === 3
        })
        this.pendientes = pendiente?.length
    }
}