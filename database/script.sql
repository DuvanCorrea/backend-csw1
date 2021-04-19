-- -----------------------------------------------------
-- Table `DOCENTES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DOCENTES` (
    `id_docente` INT NOT NULL AUTO_INCREMENT,
    `nombre_completo` VARCHAR(60) NULL,
    `correo` VARCHAR(60) NULL,
    `clave` VARCHAR(45) NULL,
    `anio_nacimiento` DATETIME NULL,
    `areas_conocimiento` VARCHAR(45) NULL,
    `materia` VARCHAR(45) NULL,
    PRIMARY KEY (`id_docente`)
);

-- -----------------------------------------------------
-- Table `MATERIALES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `MATERIALES` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `titulo_material` VARCHAR(45) NULL,
    `link_material` VARCHAR(100) NULL,
    `fecha_material` DATETIME NULL,
    `link_archivo_material` VARCHAR(100) NULL,
    `DOCENTES_id_docente` INT NOT NULL,
    `publicado` DATETIME NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_MATERIALES_DOCENTES` FOREIGN KEY (`DOCENTES_id_docente`) REFERENCES `DOCENTES` (`id_docente`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- -----------------------------------------------------
-- Table `RECONOCIMIENTOS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RECONOCIMIENTOS` (
    `id_reconocimiento` INT(10) NOT NULL AUTO_INCREMENT,
    `DOCENTES_id_docente` INT NOT NULL,
    `persona_que_otorga` VARCHAR(60) NULL,
    `persona_que_recibe` VARCHAR(60) NULL,
    `entidada_otorga` VARCHAR(60) NULL,
    `razon` VARCHAR(250) NULL,
    `anio_reconocimento` DATETIME NULL,
    PRIMARY KEY (`id_reconocimiento`),
    CONSTRAINT `fk_RECONOCIMIENTOS_DOCENTES1` FOREIGN KEY (`DOCENTES_id_docente`) REFERENCES `DOCENTES` (`id_docente`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- INSERTS
INSERT INTO
    `DOCENTES` (
        `id_docente`,
        `nombre_completo`,
        `correo`,
        `clave`,
        `anio_nacimiento`,
        `areas_conocimiento`,
        `materia`
    )
VALUES
    (
        NULL,
        'docente0',
        'docente0@correo.com',
        'docente0',
        '2021-04-01 19:28:17',
        'area1, area2, area3',
        'fisica'
    ),
    (
        NULL,
        'docente1',
        'docente1@correo.com',
        'docente1',
        '2021-04-01 19:28:17',
        'area1, area2, area3',
        'fisica'
    ),
    (
        NULL,
        'docente2',
        'docente2@correo.com',
        'docente2',
        '2021-04-01 19:28:17',
        'area1, area2, area3',
        'fisica'
    );

--
INSERT INTO
    `MATERIALES` (
        `id`,
        `titulo_material`,
        `link_material`,
        `fecha_material`,
        `link_archivo_material`,
        `DOCENTES_id_docente`,
        `publicado`
    )
VALUES
    (
        NULL,
        'material1',
        'no asignado',
        '2021-04-12 00:00:00',
        'no asignado',
        '2',
        '2021-04-16 00:00:00'
    ),
    (
        NULL,
        'materia2',
        'no asignado',
        '2021-04-12 00:00:00',
        'no asignado',
        '2',
        '2021-04-16 00:00:00'
    ),
    (
        NULL,
        'material3',
        'no asignado',
        '2021-04-12 00:00:00',
        'no asignado',
        '1',
        '2021-04-16 00:00:00'
    );

--
INSERT INTO
    `RECONOCIMIENTOS` (
        `id_reconocimiento`,
        `DOCENTES_id_docente`,
        `persona_que_otorga`,
        `persona_que_recibe`,
        `entidada_otorga`,
        `razon`,
        `anio_reconocimento`
    )
VALUES
    (
        NULL,
        '1',
        'otorga',
        'recibe',
        'sena',
        'ni idea',
        '2021-04-15 00:00:00'
    ),
    (
        NULL,
        '2',
        'otorga',
        'recibe',
        'sena',
        'ni idea',
        '2021-04-15 00:00:00'
    ),
(
        NULL,
        '2',
        'otorga',
        'recibe',
        'sena',
        'ni idea',
        '2021-04-15 00:00:00'
    );