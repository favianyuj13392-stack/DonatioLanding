import { useState } from 'react';
import { Check, CreditCard, Heart, Layers, LayoutDashboard, Plus, Users } from 'lucide-react';

type PreviewTab = 'Campañas' | 'Aportes' | 'Socios';
type PreviewTone = 'sage' | 'navy' | 'clay';

const campaigns = [
  { name: 'Educación que abre caminos', category: 'Educación', progress: 68 },
  { name: 'Un plato, nuevas oportunidades', category: 'Alimentación', progress: 42 },
  { name: 'Más cerca de la salud', category: 'Salud', progress: 85 },
];
const contributions = [
  { name: 'Aporte 003', detail: '18 jun · Educación', amount: 'BOB 1.500' },
  { name: 'Aporte 002', detail: '12 jun · Alimentación', amount: 'BOB 960' },
  { name: 'Aporte 001', detail: '04 jun · Salud', amount: 'BOB 500' },
];
const members = [
  { name: 'Socio 001', detail: 'Aporte mensual', amount: 'BOB 120' },
  { name: 'Socio 002', detail: 'Aporte mensual', amount: 'BOB 200' },
  { name: 'Socio 003', detail: 'Aporte mensual', amount: 'BOB 150' },
];
const previewMetrics = {
  Campañas: { label: 'Aportes de enero a junio', value: 'BOB 10.240', badge: '3 campañas' },
  Aportes: { label: 'Aportes registrados en junio', value: 'BOB 2.960', badge: '3 aportes' },
  Socios: { label: 'Socios recurrentes', value: '24', badge: 'Aporte mensual' },
};

export default function ProductPreview() {
  const [tab, setTab] = useState<PreviewTab>('Campañas');
  const [tone, setTone] = useState<PreviewTone>('sage');
  const metric = previewMetrics[tab];

  return (
    <div className="dm-product-preview" id="dm-producto" data-tone={tone}>
      <div className="dm-preview-label">
        <span>UNA VISTA DE DONATIO</span>
        <span className="dm-preview-label-line" />
        <span>01 / PLATAFORMA</span>
      </div>
      <div className="dm-preview-window">
        <div className="dm-window-bar">
          <span className="dm-window-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>Tu organización · Panel de gestión</span>
          <LayoutDashboard size={13} aria-hidden="true" />
        </div>
        <div className="dm-dashboard">
          <div className="dm-dashboard-rail" aria-hidden="true">
            <span className="dm-rail-brand"><Heart size={19} /></span>
            <span className="dm-rail-active"><LayoutDashboard size={17} /></span>
            <Layers size={17} /><CreditCard size={17} /><Users size={17} />
            <span className="dm-rail-bottom">FH</span>
          </div>
          <div className="dm-dashboard-main">
            <div className="dm-dashboard-heading">
              <div>
                <span>TU ESPACIO DE IMPACTO</span>
                <h3>Fundación Horizonte</h3>
              </div>
              <span className="dm-avatar">FH</span>
            </div>
            <div className="dm-preview-tabs" role="group" aria-label="Explorar la vista ilustrativa">
              {(['Campañas', 'Aportes', 'Socios'] as PreviewTab[]).map((name) => (
                <button
                  key={name}
                  type="button"
                  aria-pressed={tab === name}
                  onClick={() => setTab(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="dm-preview-content" aria-live="polite" aria-atomic="true">
              <div className="dm-preview-summary">
                <div>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
                <span className="dm-mini-badge">{metric.badge}</span>
              </div>
              {tab === 'Campañas' ? (
                <>
                  <div className="dm-chart">
                    <svg viewBox="0 0 320 108" role="img" aria-label="Aportes de ejemplo en BOB: enero 800, febrero 1260, marzo 980, abril 1940, mayo 2300, junio 2960.">
                      <path d="M0 24H320 M0 54H320 M0 84H320" className="dm-chart-grid" />
                      {[
                        { month: 'Ene', amount: 800 },
                        { month: 'Feb', amount: 1260 },
                        { month: 'Mar', amount: 980 },
                        { month: 'Abr', amount: 1940 },
                        { month: 'May', amount: 2300 },
                        { month: 'Jun', amount: 2960 },
                      ].map(({ month, amount }, index) => (
                        <g key={month}>
                          <rect x={index * 53 + 12} y={84 - amount / 40} width="28" height={amount / 40} rx="4" />
                          <text x={index * 53 + 26} y="104" textAnchor="middle">{month}</text>
                        </g>
                      ))}
                    </svg>
                  </div>
                  <div className="dm-list-heading">
                    <span>Campañas activas</span>
                    <span>Avance de meta</span>
                  </div>
                  <div className="dm-campaign-list">
                    {campaigns.map((campaign, index) => (
                      <div className="dm-campaign-row" key={campaign.name}>
                        <span className={`dm-campaign-icon dm-campaign-icon-${index}`} aria-hidden="true">
                          {index === 0 ? <Layers size={16} /> : index === 1 ? <Heart size={16} /> : <Plus size={16} />}
                        </span>
                        <div>
                          <strong>{campaign.name}</strong>
                          <span>{campaign.category}</span>
                        </div>
                        <div className="dm-campaign-progress">
                          <span>{campaign.progress}%</span>
                          <progress value={campaign.progress} max="100" aria-label={`Avance ilustrativo de ${campaign.name}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="dm-records">
                  <div className="dm-records-intro">
                    <span className="dm-records-icon">
                      {tab === 'Aportes' ? <CreditCard size={24} aria-hidden="true" /> : <Users size={24} aria-hidden="true" />}
                    </span>
                    <p>{tab === 'Aportes' ? 'Cada aporte, en un mismo lugar.' : 'Un vínculo que continúa mes a mes.'}</p>
                  </div>
                  <div className="dm-list-heading">
                    <span>{tab === 'Aportes' ? 'Últimos aportes' : 'Selección de socios'}</span>
                    <span>Importe</span>
                  </div>
                  {(tab === 'Aportes' ? contributions : members).map((record) => (
                    <div className="dm-record-row" key={record.name}>
                      <span className="dm-record-check"><Check size={13} aria-hidden="true" /></span>
                      <div>
                        <strong>{record.name}</strong>
                        <span>{record.detail}</span>
                      </div>
                      <b>{record.amount}</b>
                    </div>
                  ))}
                  <p className="dm-records-note">Registros ilustrativos. No se realizan operaciones.</p>
                </div>
              )}
            </div>
            <div className="dm-dashboard-footer">
              <span className="dm-status-dot" />Vista ilustrativa · Datos de ejemplo
            </div>
          </div>
        </div>
      </div>
      <div className="dm-preview-customize">
        <span>Una plataforma. <strong>Tu identidad.</strong></span>
        <div className="dm-palette" role="group" aria-label="Cambiar la paleta de la vista ilustrativa">
          {([
            { id: 'sage', label: 'verde salvia' },
            { id: 'navy', label: 'azul profundo' },
            { id: 'clay', label: 'terracota' },
          ] as const).map((palette) => (
            <button
              type="button"
              key={palette.id}
              className={`dm-swatch dm-swatch-${palette.id}`}
              aria-label={`Vista en ${palette.label}`}
              aria-pressed={tone === palette.id}
              onClick={() => setTone(palette.id)}
            >
              {tone === palette.id && <Check size={13} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>
      <div className="dm-preview-caption">
        <span className="dm-caption-symbol" aria-hidden="true">↳</span>
        <p>Detrás de cada aporte,<br /><strong>una causa que sigue adelante.</strong></p>
      </div>
    </div>
  );
}
