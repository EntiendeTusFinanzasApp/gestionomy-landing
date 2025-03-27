"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  CreditCard,
  DollarSign,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Bell,
  CheckSquare,
  PieChart,
  ArrowDownCircle,
  ArrowUpCircle,
  FileBarChart,
  Calendar,
  Filter,
  Users,
  Accessibility,
  EyeClosed,
  Trash,
  PencilIcon,
} from "lucide-react";
import Image from "next/image";
import { ImageCarousel } from "@/components/image-carousel";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LandingPage() {
  const handleGoApp = () => {
    window.open("https://gestionomy.com", "_blank");
  };

  const handleGoInfo = () => {
    window.open("https://gestionomy.info", "_blank");
  };

  const handleContactWhatsApp = () => {
    const phoneNumber = "5493816090225";
    window.open(
      `https://wa.me/${phoneNumber}?text=Hola,%20estoy%20interesado%20en%20Gestionomy`,
      "_blank"
    );
  };
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 px-2">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className=" px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Gestiona tus finanzas con facilidad
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Una aplicación completa para el control de ingresos,
                      gastos, inventario y más. Todo lo que necesitas para tu
                      negocio en un solo lugar.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" onClick={handleGoApp}>
                      Probala gratis durante 10 días
                    </Button>
                    <Button
                      variant={"outline"}
                      size="lg"
                      onClick={handleGoInfo}
                    >
                      Mas información
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative overflow-hidden rounded-xl bg-background">
                    <Image
                      src="/images/home.webp"
                      width={1280}
                      height={720}
                      alt="Dashboard de la aplicación"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="features"
            className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          >
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Características Principales
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Nuestra aplicación ofrece todas las herramientas que
                    necesitas para gestionar tus finanzas e inventario de manera
                    eficiente.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ArrowUpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Gestión de Ingresos y Gastos
                        </h3>
                        <p className="text-muted-foreground">
                          Registra y categoriza todos tus ingresos/gastos de
                          manera sencilla y rápida.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ArrowDownCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Crea organizaciones y permisos
                        </h3>
                        <p className="text-muted-foreground">
                          Crea tu organización yasigna a usuarios con distitnos
                          permisos y roles.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Análisis y Reportes
                        </h3>
                        <p className="text-muted-foreground">
                          Visualiza tus finanzas con gráficos interactivos y
                          reportes detallados.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Package className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Gestión de Inventario
                        </h3>
                        <p className="text-muted-foreground">
                          Controla tu stock, productos y ventas desde un solo
                          lugar.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Bell className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Avtividades y Tareas
                        </h3>
                        <p className="text-muted-foreground">
                          Revisa las actividades de los usuarios y gestiona tus
                          tareas pendientes.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Settings className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">
                          Configuración Personalizada
                        </h3>
                        <p className="text-muted-foreground">
                          Adapta la aplicación a tus necesidades con opciones de
                          configuración avanzadas.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="modules" className="w-full py-12 md:py-24 lg:py-32">
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Módulos Detallados
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Explora cada módulo de nuestra aplicación y descubre cómo
                    puede ayudarte a gestionar tu negocio.
                  </p>
                </div>
              </div>

              <Tabs defaultValue="dashboard" className="mt-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 my-7 lg:grid-cols-7 ">
                  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                  <TabsTrigger value="finances">Finanzas</TabsTrigger>
                  <TabsTrigger value="inventory">Inventario</TabsTrigger>
                  <TabsTrigger value="sales">Movimientos</TabsTrigger>
                  <TabsTrigger value="reports">Reportes</TabsTrigger>
                  <TabsTrigger value="settings">Configuración</TabsTrigger>
                  <TabsTrigger value="notifications">
                    Notificaciones
                  </TabsTrigger>
                </TabsList>

                <TabsContent
                  value="dashboard"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Dashboard Principal
                      </h3>
                      <p className="text-muted-foreground">
                        El dashboard te ofrece una visión general de tus
                        finanzas e inventario con tarjetas de resumen que
                        muestran la información más relevante de un vistazo.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <span>Tarjetas de resumen financiero</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-primary" />
                          <span>Gráficos de balance de gastos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ShoppingCart className="h-5 w-5 text-primary" />
                          <span>Ranking de categorías</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckSquare className="h-5 w-5 text-primary" />
                          <span>Ahorros y objetivos configurados</span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/dashboard/image1.webp",
                        "/images/dashboard/style.png",
                        "/images/dashboard/home-phone.png",
                      ]}
                      alt="Vista del Dashboard"
                    />
                  </div>
                </TabsContent>

                <TabsContent
                  value="finances"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Gestión de Finanzas
                      </h3>
                      <p className="text-muted-foreground">
                        Registra y gestiona todos tus ingresos y gastos con un
                        sistema intuitivo que te permite categorizar y analizar
                        tus movimientos financieros.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowUpCircle className="h-5 w-5 text-primary" />
                          <span>
                            Carga ingresos y egresos con categorías y métodos de
                            pago
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Filter className="h-5 w-5 text-primary" />
                          <span>Filtros avanzados para análisis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>
                            Vista de calendario por fechas de tus transacciones
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileBarChart className="h-5 w-5 text-primary" />
                          <span>
                            Exporta e importa tus transacciones cuando quieras
                          </span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/finances/transacciones.png",
                        "/images/finances/calendario.png",
                        "/images/finances/ingreso.png",
                      ]}
                      alt="Gestión de Finanzas"
                    />
                  </div>
                </TabsContent>

                <TabsContent
                  value="inventory"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Control de Inventario
                      </h3>
                      <p className="text-muted-foreground">
                        Gestiona tu stock de productos de manera eficiente, con
                        reportes y seguimiento detallado de cada producto.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          <span>Carga y edición de productos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ShoppingCart className="h-5 w-5 text-primary" />
                          <span>Gestión de stock y diversos almacenes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <PencilIcon className="h-5 w-5 text-primary" />
                          <span>
                            Ajusta cantidades, precios y ubicación de tus
                            productos cuando quieras
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <span>
                            Análisis de ventas, productos vendidos y reportes
                            varios
                          </span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/inventory/inventario.png",
                        "/images/inventory/almacenes.png",
                        "/images/inventory/new-product.png",
                      ]}
                      alt="Control de Inventario"
                    />
                  </div>
                </TabsContent>

                <TabsContent
                  value="sales"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Gestión de Movimientos
                      </h3>
                      <p className="text-muted-foreground">
                        Registra tus ventas de forma rápida y sencilla, con
                        actualización automática del inventario y generación de
                        informes.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ShoppingCart className="h-5 w-5 text-primary" />
                          <span>
                            Carga de ventas con múltiples productos de tu
                            almacen
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          <span>Actualización automática de stock</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span>
                            Registro de pagos a proveedores y maestro de
                            clientes
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-primary" />
                          <span>Análisis de tendencias de ventas</span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/sales/movimientos.png",
                        "/images/sales/clientes.png",
                      ]}
                      alt="Gestión de Ventas"
                    />
                  </div>
                </TabsContent>

                <TabsContent
                  value="reports"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Análisis y Reportes
                      </h3>
                      <p className="text-muted-foreground">
                        Obtén informes detallados sobre tus finanzas, inventario
                        y ventas, con gráficos interactivos y diversos filtros.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-primary" />
                          <span>Reportes financieros</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <LineChart className="h-5 w-5 text-primary" />
                          <span>Análisis de tendencias</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <PieChart className="h-5 w-5 text-primary" />
                          <span>Distribución de gastos e ingresos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <FileBarChart className="h-5 w-5 text-primary" />
                          <span>
                            Analiza por almacen, producto, cliente y categoría
                          </span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/reports/reporte-inv.png",
                        "/images/reports/graficos-celu.webp",
                        "/images/reports/reporte.png",
                      ]}
                      alt="Análisis y Reportes"
                    />
                  </div>
                </TabsContent>

                <TabsContent
                  value="settings"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">Configuración</h3>
                      <p className="text-muted-foreground">
                        Personaliza la aplicación según tus necesidades con
                        opciones avanzadas de configuración para cada módulo.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Settings className="h-5 w-5 text-primary" />
                          <span>Configuración de perfil y empresa</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <span>Gestión de categorías financieras</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary" />
                          <span>Configuración de productos y stock</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Bell className="h-5 w-5 text-primary" />
                          <span>Preferencias de notificaciones</span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/settings/configuracion.png",
                        "/images/settings/categorias.png",
                        "/images/settings/metodos.png",
                      ]}
                      alt="Configuración"
                    />
                  </div>
                </TabsContent>

                <TabsContent
                  value="notifications"
                  className="mt-6 bg-muted p-6 rounded-lg overflow-hidden"
                >
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-2xl font-bold">
                        Ahorros, Tareas y Actividades
                      </h3>
                      <p className="text-muted-foreground">
                        Mantente al día a tus empleados y gestiona tus tareas
                        pendientes desde un solo lugar.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Bell className="h-5 w-5 text-primary" />
                          <span>
                            Asiganción de tareas entre usuarios de organización
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckSquare className="h-5 w-5 text-primary" />
                          <span>Gestión de tus ahorros</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span>
                            Trackeo de actividades y movimientos en la app.
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Settings className="h-5 w-5 text-primary" />
                          <span>Gestión de status de tareas</span>
                        </li>
                      </ul>
                    </div>
                    <ImageCarousel
                      images={[
                        "/images/notifications/ahorros.png",
                        "/images/notifications/tareas.png",
                        "/images/notifications/actividades.png",
                      ]}
                      alt="Notificaciones y Tareas"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
            <div className=" px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Gestión de organizaciones
                  </h3>
                  <p className="text-muted-foreground">
                    Crea una organizcion para tu local, añade usuarios con
                    distitnos permisos y visualizaciones
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Roles de usuario</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Accessibility className="h-5 w-5 text-primary" />
                      <span>Distitnos permisos y accesos a la aplicación</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <EyeClosed className="h-5 w-5 text-primary" />
                      <span>Oculta información sensible a tus empleados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Trash className="h-5 w-5 text-primary" />
                      <span>Elimina y añade usuarios como queiras.</span>
                    </li>
                  </ul>
                </div>

                <ImageCarousel
                  images={[
                    "/images/organization/organizaciones.png",
                    "/images/organization/cambia-org.png",
                  ]}
                  alt="Notificaciones y Tareas"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className=" px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    ¿Listo para optimizar tu negocio?
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl">
                    Agenda una reunión hoy mismo y descubre cómo puede ayudarte
                    a gestionar tus finanzas e inventario de manera eficiente.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button onClick={handleContactWhatsApp} size="lg">
                    Ponte en contacto
                  </Button>
                  <Button onClick={handleGoApp} variant={"outline"} size="lg">
                    Registrate gratis
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
