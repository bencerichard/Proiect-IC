package com.example.elctrnx.entities;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Product {

    @Id
    @Column(unique = true)
    @GeneratedValue
    private Integer productId;
    private BigDecimal price;
    private String name;
    private String description;
    private String image;

    @ManyToOne
    private ProductCategory productCategory;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Stock> stocks;
}
