import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <span>Gestionomy</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Características
              </Link>
              <Link href="#modules" className="text-sm font-medium transition-colors hover:text-primary">
                Módulos
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gestiona tus finanzas con facilidad
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Una aplicación completa para el control de ingresos, gastos, inventario y más. Todo lo que necesitas
                    para tu negocio en un solo lugar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Ir a la aplicación</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative  overflow-hidden rounded-xl bg-background">
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

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Características Principales</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Nuestra aplicación ofrece todas las herramientas que necesitas para gestionar tus finanzas e
                  inventario de manera eficiente.
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
                      <h3 className="text-xl font-bold">Gestión de Ingresos</h3>
                      <p className="text-muted-foreground">
                        Registra y categoriza todos tus ingresos de manera sencilla y rápida.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ArrowDownCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Control de Gastos</h3>
                      <p className="text-muted-foreground">
                        Mantén un registro detallado de todos tus gastos con categorías personalizables.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Análisis y Reportes</h3>
                      <p className="text-muted-foreground">
                        Visualiza tus finanzas con gráficos interactivos y reportes detallados.
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
                      <h3 className="text-xl font-bold">Gestión de Inventario</h3>
                      <p className="text-muted-foreground">
                        Controla tu stock, productos y ventas desde un solo lugar.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Bell className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Asignación de Tareas</h3>
                      <p className="text-muted-foreground">
                        Recibe alertas importantes y gestiona las tareas pendientes entre los usuarios de la organización.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Configuración Personalizada</h3>
                      <p className="text-muted-foreground">
                        Adapta la aplicación a tus necesidades con opciones de configuración avanzadas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="modules" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Módulos Detallados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explora cada módulo de nuestra aplicación y descubre cómo puede ayudarte a gestionar tu negocio.
                </p>
              </div>
            </div>

            <Tabs defaultValue="dashboard" className="mt-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="finances">Finanzas</TabsTrigger>
                <TabsTrigger value="inventory">Inventario</TabsTrigger>
                <TabsTrigger value="sales">Ventas</TabsTrigger>
                <TabsTrigger value="reports">Reportes</TabsTrigger>
                <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
                <TabsTrigger value="settings">Configuración</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Dashboard Principal</h3>
                    <p className="text-muted-foreground">
                      El dashboard te ofrece una visión general de tus finanzas en el mes corriente con tarjetas de resumen que
                      muestran la información más relevante de un vistazo.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-primary" />
                        <span>Tarjetas de resumen financiero</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-primary" />
                        <span>Gráficos de balance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        <span>Ranking de categorias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckSquare className="h-5 w-5 text-primary" />
                        <span>Ahorros disponibles</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Dashboard de la aplicación"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Vista del Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="finances" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Gestión de Finanzas</h3>
                    <p className="text-muted-foreground">
                      Registra y gestiona todos tus ingresos y gastos con un sistema intuitivo que te permite
                      categorizar y analizar tus movimientos financieros.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ArrowUpCircle className="h-5 w-5 text-primary" />
                        <span>Carga de ingresos con categorías</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowDownCircle className="h-5 w-5 text-primary" />
                        <span>Registro de gastos detallado</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-primary" />
                        <span>Gráficos de distribución</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileBarChart className="h-5 w-5 text-primary" />
                        <span>Filtros avanzados para análisis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Módulo de finanzas"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Gestión de Finanzas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="inventory" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Control de Inventario</h3>
                    <p className="text-muted-foreground">
                      Gestiona tu stock de productos de manera eficiente, con alertas de stock bajo y seguimiento
                      detallado de cada producto.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        <span>Carga y edición de productos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        <span>Gestión de stock</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        <span>Alertas de stock bajo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        <span>Análisis de rotación de productos</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Módulo de inventario"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Control de Inventario</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sales" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Gestión de Ventas</h3>
                    <p className="text-muted-foreground">
                      Registra tus ventas de forma rápida y sencilla, con actualización automática del inventario y
                      generación de informes.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        <span>Carga de ventas con múltiples productos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        <span>Actualización automática de stock</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span>Registro de pagos y deudas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-primary" />
                        <span>Análisis de tendencias de ventas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Módulo de ventas"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Gestión de Ventas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reports" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Análisis y Reportes</h3>
                    <p className="text-muted-foreground">
                      Obtén informes detallados sobre tus finanzas, inventario y ventas, con gráficos interactivos y
                      filtros personalizables.
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
                        <span>Exportación de informes en PDF y Excel</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Módulo de reportes"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Análisis y Reportes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Notificaciones y Tareas</h3>
                    <p className="text-muted-foreground">
                      Mantente al día con todas las alertas importantes y gestiona tus tareas pendientes desde un solo
                      lugar.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" />
                        <span>Alertas de stock bajo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckSquare className="h-5 w-5 text-primary" />
                        <span>Gestión de tareas pendientes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span>Recordatorios de pagos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-primary" />
                        <span>Configuración de notificaciones</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Módulo de notificaciones"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Notificaciones y Tareas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-2xl font-bold">Configuración</h3>
                    <p className="text-muted-foreground">
                      Personaliza la aplicación según tus necesidades con opciones avanzadas de configuración para cada
                      módulo.
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
                  <div className="flex items-center justify-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border bg-background">
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        width={1280}
                        height={720}
                        alt="Módulo de configuración"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <p className="text-lg font-medium">Configuración</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Listo para optimizar tu negocio?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Comienza a utilizar nuestra aplicación hoy mismo y descubre cómo puede ayudarte a gestionar tus
                  finanzas e inventario de manera eficiente.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Comenzar Prueba Gratuita</Button>
                <Button size="lg" variant="outline">
                  Solicitar Demostración
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex gap-2 items-center text-xl font-bold">
            <DollarSign className="h-6 w-6" />
            <span>FinanceApp</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FinanceApp. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

